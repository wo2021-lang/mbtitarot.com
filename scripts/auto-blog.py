# -*- coding: utf-8 -*-
"""
자동 블로그 글 생성 & Firestore 발행
- Google Gemini API (무료)로 타로/MBTI 관련 글 생성
- Firestore REST API로 직접 업로드
"""

import json
import os
import random
import urllib.request
import datetime

# ── 설정 ──
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key={GEMINI_API_KEY}"
FIRESTORE_URL = "https://firestore.googleapis.com/v1/projects/mbtitarot-a02c6/databases/(default)/documents/posts"

# ── 주제 풀 (랜덤 선택) ──
TOPICS = [
    # 타로 카드 해석
    {"category": "타로 해석", "topic": "타로 카드 '연인(The Lovers)'의 깊은 의미와 연애 리딩에서의 해석"},
    {"category": "타로 해석", "topic": "타로 카드 '죽음(Death)'이 나왔을 때 - 변화와 재탄생의 메시지"},
    {"category": "타로 해석", "topic": "타로 카드 '달(The Moon)'의 의미 - 불안, 환상, 그리고 직관"},
    {"category": "타로 해석", "topic": "타로 카드 '태양(The Sun)'이 전하는 성공과 기쁨의 메시지"},
    {"category": "타로 해석", "topic": "타로 카드 '별(The Star)'의 의미 - 희망과 치유의 에너지"},
    {"category": "타로 해석", "topic": "타로 카드 '심판(Judgement)'의 각성과 부활의 의미"},
    {"category": "타로 해석", "topic": "타로 카드 '은둔자(The Hermit)' - 자기 성찰과 내면 탐구"},
    {"category": "타로 해석", "topic": "타로 카드 '전차(The Chariot)'가 말하는 의지력과 승리"},
    {"category": "타로 해석", "topic": "타로 카드 '운명의 수레바퀴(Wheel of Fortune)'와 인생의 전환점"},
    {"category": "타로 해석", "topic": "타로 카드 '힘(Strength)'의 내면적 강인함과 인내의 메시지"},
    {"category": "타로 해석", "topic": "타로 마이너 아르카나 '컵(Cups)' 슈트 완벽 가이드 - 감정과 관계"},
    {"category": "타로 해석", "topic": "타로 마이너 아르카나 '소드(Swords)' 슈트 해석 - 지성과 갈등"},
    {"category": "타로 해석", "topic": "타로 마이너 아르카나 '완드(Wands)' 슈트 해석 - 열정과 창의력"},
    {"category": "타로 해석", "topic": "타로 마이너 아르카나 '펜타클(Pentacles)' 슈트 해석 - 물질과 현실"},

    # MBTI 분석
    {"category": "MBTI 분석", "topic": "MBTI INFJ 유형 완벽 분석 - 세상에서 가장 희귀한 성격"},
    {"category": "MBTI 분석", "topic": "MBTI ENFP 유형의 매력과 약점 - 열정 넘치는 자유로운 영혼"},
    {"category": "MBTI 분석", "topic": "MBTI ISTP 유형 분석 - 논리적인 장인의 세계"},
    {"category": "MBTI 분석", "topic": "MBTI ENFJ 유형 분석 - 타고난 리더, 따뜻한 선생님"},
    {"category": "MBTI 분석", "topic": "MBTI INTP 유형 - 끊임없이 사고하는 논리학자"},
    {"category": "MBTI 분석", "topic": "MBTI ESFJ 유형 분석 - 사교적이고 헌신적인 돌봄이"},
    {"category": "MBTI 분석", "topic": "MBTI 유형별 직업 적성과 커리어 추천 총정리"},
    {"category": "MBTI 분석", "topic": "MBTI 유형별 공부법 - 나에게 맞는 학습 스타일 찾기"},
    {"category": "MBTI 분석", "topic": "MBTI 유형별 여행 스타일 - 당신은 어떤 여행자?"},
    {"category": "MBTI 분석", "topic": "MBTI 유형별 돈 관리 스타일과 재테크 추천"},

    # MBTI 궁합
    {"category": "MBTI 궁합", "topic": "INFJ와 ENFP 궁합 - 이상적 파트너가 되는 이유"},
    {"category": "MBTI 궁합", "topic": "INTJ와 INFP 궁합 분석 - 지적 교감의 커플"},
    {"category": "MBTI 궁합", "topic": "ISTP와 ESFJ 궁합 - 정반대가 만나면?"},
    {"category": "MBTI 궁합", "topic": "ENFJ와 ISFP 궁합 - 따뜻함과 예술이 만나다"},
    {"category": "MBTI 궁합", "topic": "MBTI 최악의 궁합 TOP 5 - 피해야 할 조합?"},
    {"category": "MBTI 궁합", "topic": "MBTI 최고의 궁합 TOP 5 - 과학적으로 검증된 찰떡 조합"},
    {"category": "MBTI 궁합", "topic": "MBTI 친구 궁합 - 우정에서 최고의 조합은?"},

    # 별자리 운세
    {"category": "별자리 운세", "topic": "양자리 성격과 운세 완벽 분석 - 불의 선두주자"},
    {"category": "별자리 운세", "topic": "전갈자리의 비밀 - 가장 강렬한 별자리의 모든 것"},
    {"category": "별자리 운세", "topic": "물고기자리 성격과 연애운 - 감수성의 아이콘"},
    {"category": "별자리 운세", "topic": "별자리별 2026년 하반기 운세 전망"},
    {"category": "별자리 운세", "topic": "별자리별 금전운과 재테크 성향 분석"},
    {"category": "별자리 운세", "topic": "별자리 궁합 차트 - 최고의 커플 조합은?"},

    # 사주/운세
    {"category": "사주 운세", "topic": "사주에서 '식신(食神)'이란? - 먹복과 재능의 별"},
    {"category": "사주 운세", "topic": "사주 천간과 지지 기초 - 갑을병정무기경신임계 해설"},
    {"category": "사주 운세", "topic": "사주로 보는 나의 결혼운 - 배우자 운은 어디에?"},
    {"category": "사주 운세", "topic": "2026년 병오년 사주 운세 총정리"},
    {"category": "사주 운세", "topic": "사주 12운성으로 보는 인생의 흐름"},

    # 타로 활용/팁
    {"category": "타로 가이드", "topic": "타로 카드 질문하는 법 - 좋은 질문이 좋은 답을 만든다"},
    {"category": "타로 가이드", "topic": "타로 카드 정화하는 방법 5가지 - 새 덱 세팅법"},
    {"category": "타로 가이드", "topic": "타로 스프레드 종류 총정리 - 상황별 추천 배열법"},
    {"category": "타로 가이드", "topic": "역방향 타로 카드, 꼭 읽어야 할까? - 초보자 가이드"},
    {"category": "타로 가이드", "topic": "타로 카드로 예/아니오 답 얻는 방법"},
    {"category": "타로 가이드", "topic": "연애 타로 스프레드 TOP 5 - 사랑의 답을 찾는 배열법"},
    {"category": "타로 가이드", "topic": "신년 운세 타로 스프레드 - 12개월 운세 한눈에 보기"},

    # 트렌드/재미
    {"category": "트렌드", "topic": "MZ세대가 타로에 빠지는 이유 - 2026년 점술 붐 분석"},
    {"category": "트렌드", "topic": "타로 vs 사주 vs 별자리 - 어떤 점술이 나에게 맞을까?"},
    {"category": "트렌드", "topic": "MBTI 밈 모음 - 유형별 웃긴 특징 총정리"},
    {"category": "트렌드", "topic": "타로 카드의 역사 - 15세기 이탈리아에서 현대까지"},
    {"category": "트렌드", "topic": "동양 vs 서양 점술 체계 비교 - 문화별 운명 해석법"},
    {"category": "트렌드", "topic": "AI 시대의 점술 - 기술과 영성의 만남"},
]


def pick_topic():
    """이전에 발행된 제목과 겹치지 않는 주제 선택"""
    # 기존 글 제목들 가져오기
    try:
        req = urllib.request.Request(FIRESTORE_URL + "?pageSize=100")
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            existing = set()
            for doc in data.get("documents", []):
                t = doc.get("fields", {}).get("title", {}).get("stringValue", "")
                existing.add(t)
    except Exception:
        existing = set()

    # 겹치지 않는 주제 필터링
    available = [t for t in TOPICS if t["topic"] not in existing]
    if not available:
        # 모든 주제 소진 시 전체에서 랜덤
        available = TOPICS

    return random.choice(available)


def generate_blog_post(topic_info):
    """Gemini API로 블로그 글 생성"""
    prompt = f"""당신은 타로, MBTI, 별자리, 사주 전문 블로거입니다.
다음 주제로 블로그 글을 작성해주세요.

주제: {topic_info['topic']}
카테고리: {topic_info['category']}

작성 규칙:
1. HTML 형식으로 작성 (h2, h3, p, ul, li, strong, br 태그 사용)
2. 최상위 제목은 h2로 시작 (h1 사용 금지)
3. 본문 길이: 1500~2500자 (한국어 기준)
4. 흥미롭고 유익한 정보 위주로 작성
5. 자연스러운 한국어, 친근한 톤
6. 마지막에 "신비 타로 사이트에서 직접 체험해보세요!" 같은 CTA 포함
7. 제목도 함께 생성 (매력적인 제목)
8. 요약문 1~2줄도 함께 생성

응답 형식 (JSON):
{{
  "title": "글 제목",
  "summary": "요약문 1~2줄",
  "content": "<h2>...</h2><p>...</p>..."
}}

반드시 유효한 JSON으로만 응답하세요. 다른 텍스트는 포함하지 마세요."""

    body = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.8,
            "maxOutputTokens": 4096,
            "responseMimeType": "application/json"
        }
    }

    data = json.dumps(body).encode("utf-8")

    # 재시도 로직 (429 에러 대응)
    import time
    result = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(
                GEMINI_URL,
                data=data,
                headers={"Content-Type": "application/json"},
                method="POST"
            )
            with urllib.request.urlopen(req, timeout=90) as resp:
                result = json.loads(resp.read().decode("utf-8"))
            break
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 2:
                wait = 30 * (attempt + 1)
                print(f"Rate limited, waiting {wait}s... (attempt {attempt+1}/3)")
                time.sleep(wait)
            else:
                raise

    if result is None:
        raise Exception("Gemini API call failed after 3 attempts")

    # Gemini 응답에서 텍스트 추출
    text = result["candidates"][0]["content"]["parts"][0]["text"]

    # JSON 파싱 (코드블록 감싸기 대응)
    text = text.strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[1]
        text = text.rsplit("```", 1)[0]

    return json.loads(text)


def publish_to_firestore(post_data, category):
    """Firestore에 블로그 글 발행"""
    now = datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")

    body = {
        "fields": {
            "title": {"stringValue": post_data["title"]},
            "content": {"stringValue": post_data["content"]},
            "summary": {"stringValue": post_data.get("summary", "")},
            "category": {"stringValue": category},
            "createdAt": {"timestampValue": now},
            "updatedAt": {"timestampValue": now}
        }
    }

    data = json.dumps(body, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        FIRESTORE_URL,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST"
    )

    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode("utf-8"))
        doc_id = result["name"].split("/")[-1]
        return doc_id


def main():
    if not GEMINI_API_KEY:
        print("ERROR: GEMINI_API_KEY not set")
        return

    # 1. 주제 선택
    topic_info = pick_topic()
    print(f"Selected topic: {topic_info['topic']}")
    print(f"Category: {topic_info['category']}")

    # 2. AI로 글 생성
    print("Generating blog post with Gemini...")
    post_data = generate_blog_post(topic_info)
    print(f"Generated: {post_data['title']}")

    # 3. Firestore에 발행
    print("Publishing to Firestore...")
    doc_id = publish_to_firestore(post_data, topic_info["category"])
    print(f"Published! Document ID: {doc_id}")
    print(f"Title: {post_data['title']}")


if __name__ == "__main__":
    main()
