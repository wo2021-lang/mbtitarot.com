# Mystical Orion MBTI Tarot - 프로젝트 정보

## 도메인 & 호스팅

| 항목 | 내용 |
|------|------|
| 도메인 | `mbtitarot.com` |
| 호스팅 | GitHub Pages (무료 정적 호스팅) |
| GitHub 저장소 | https://github.com/wo2021-lang/mbtitarot.com.git |
| 배포 방식 | main 브랜치에 push하면 자동 반영 (1~2분 소요) |
| CNAME | 저장소 루트의 `CNAME` 파일에 `mbtitarot.com` 설정됨 |
| SSL | GitHub Pages에서 자동 제공 (HTTPS) |

## 서버 업로드 방법

로컬 폴더: `C:\Users\woo\Desktop\신비타로`

```bash
cd "C:\Users\woo\Desktop\신비타로"
git add 파일명
git commit -m "설명"
git push origin main
```

- push 후 1~2분 뒤 사이트에 반영
- 빌드 도구 없음 (npm, webpack 등 불필요)
- 순수 정적 HTML + JS + CSS 구성

## 수익화 (광고)

| 항목 | 내용 |
|------|------|
| Google AdSense | 퍼블리셔 ID: `pub-1944751235800278` |
| ads.txt | 저장소 루트에 설정 완료 |
| 쿠팡 파트너스 | index.html 내 iframe 광고 삽입 |
| AdSense 상태 | 2026-04-07 검토 요청 (심사 중) |

## Firebase (블로그 시스템)

| 항목 | 내용 |
|------|------|
| 프로젝트명 | mbtitarot |
| 프로젝트 ID | mbtitarot-a02c6 |
| 요금제 | Blaze (종량제, 무료 범위 내 사용) |
| Firestore | 위치: asia-northeast3 (서울), Standard 버전 |
| Firestore 보안규칙 | 테스트 모드 (30일 후 규칙 업데이트 필요!) |
| Storage | 미활성 (Billing 프로젝트 한도 초과로 연결 안 됨) |
| 블로그 관리자 URL | mbtitarot.com/blog-admin.html |
| 블로그 관리자 비번 | 1127 |
| Firebase Console | https://console.firebase.google.com/project/mbtitarot-a02c6 |

### Firebase 설정값 (js/firebase-blog.js)
```javascript
apiKey: "AIzaSyB0HtrsLdseaIeycmxkEKkpI6vtlBxGO0E"
authDomain: "mbtitarot-a02c6.firebaseapp.com"
projectId: "mbtitarot-a02c6"
storageBucket: "mbtitarot-a02c6.firebasestorage.app"
messagingSenderId: "496907077829"
appId: "1:496907077829:web:94ba7f94d31831b49788ac"
measurementId: "G-FV358Q6ZPE"
```

## SEO & 검색엔진 등록

| 항목 | 내용 |
|------|------|
| Google Search Console | 등록 완료, 인증: meta 태그 `HqfKUwkDq48kgOQPd6vuxRcBu9Q5RPQ6GtIGQgLuq0s` |
| 네이버 웹마스터 | 등록 완료, 인증: `naver59bac7ae6920c3bf31fe89859c711698.html` |
| sitemap.xml | 8개 페이지 등록 (index, about, guide, mbti-guide, tarot-cards, faq, blog, terms, privacy) |
| robots.txt | 설정 완료 |

## 사이트 구조

### HTML 페이지
| 파일 | 설명 | 검색엔진 노출 |
|------|------|--------------|
| index.html | 메인 SPA (타로, 사주, 궁합 등 모든 기능) | O |
| about.html | 서비스 소개 | O |
| guide.html | 타로 카드 가이드 | O |
| tarot-cards.html | 78장 카드 해석 (정적 HTML) | O |
| mbti-guide.html | MBTI x 타로 해석 가이드 | O |
| faq.html | 자주 묻는 질문 (12개) | O |
| blog.html | 블로그 (Firebase Firestore 연동) | O |
| terms.html | 이용약관 | O |
| privacy.html | 개인정보처리방침 | O |
| blog-admin.html | 블로그 관리자 (비공개) | X (noindex) |

### 주요 JS 파일
| 파일 | 설명 |
|------|------|
| js/app.js | 메인 앱 로직 (SPA, 타로, 사주 등) |
| js/i18n.js | 메인 앱 다국어 번역 (7개 언어) |
| js/tarot.js | 78장 타로 카드 데이터 |
| js/translations.js | 타로 해석 번역 데이터 |
| js/static-i18n.js | 별도 HTML 페이지용 다국어 처리 |
| js/pages-i18n-*.js | 각 페이지별 번역 (about, guide, faq, terms, privacy, mbti) |
| js/firebase-blog.js | Firebase 블로그 CRUD |

### 기타 파일
| 파일 | 설명 |
|------|------|
| css/style.css | 전체 스타일시트 |
| manifest.json | PWA 매니페스트 |
| sw.js | 서비스 워커 (PWA) |
| CNAME | 커스텀 도메인 설정 |
| ads.txt | AdSense 인증 |
| icons/ | 앱 아이콘, OG 이미지 |

## 다국어 지원

7개 언어: 한국어(ko), 영어(en), 일본어(ja), 스페인어(es), 포르투갈어(pt), 프랑스어(fr), 독일어(de)

- 메인 앱: js/i18n.js에서 처리
- 서브 페이지: js/static-i18n.js + js/pages-i18n-*.js에서 처리
- 언어 감지: URL `?lang=xx` 또는 localStorage

## 주요 기능

1. MBTI 맞춤 타로 점사 (연애/재물/건강/직업)
2. 오늘의 카드 (매일 무료 1장)
3. 사주팔자 분석
4. 별자리 운세 (12별자리)
5. MBTI 궁합 분석
6. 로또번호 운세
7. 길일 택일
8. 78장 타로 카드 도감
9. 블로그 (Firebase)
10. 포인트 시스템 (출석체크, 광고시청)

## 개발 이력 (주요)

| 날짜 | 작업 내용 |
|------|----------|
| 2026-04-06 | AdSense 정책 위반 대응: 콘텐츠 페이지 7개 추가 |
| 2026-04-07 | tarot-cards.html Python으로 정적 생성 (78장 카드 해석) |
| 2026-04-07 | 서비스 안내 페이지 다국어 처리 (7개 언어) |
| 2026-04-07 | 방문자 카운터 추가 (localStorage 기반) |
| 2026-04-07 | 블로그 시스템 구축 (Firebase Firestore) |
| 2026-04-07 | Quill 리치텍스트 에디터 적용 (이미지 붙여넣기/드래그앤드롭) |
| 2026-04-07 | 블로그 관리자 비밀번호: 1127 |
| 2026-04-07 | AdSense 검토 요청 제출 |
| 2026-04-08 | 서비스 안내 링크 다국어 + 서브페이지 lang 파라미터 전달 |

## 주의사항

- Firestore 보안규칙이 **테스트 모드** (30일 한정) → 만료 전 규칙 업데이트 필요
- Firebase Storage는 Billing 한도로 활성화 안 됨 → 이미지는 base64로 Firestore에 저장
- CNAME 파일 절대 삭제 금지 (삭제하면 도메인 연결 끊어짐)
- GitHub Pages는 정적 파일만 서빙 (서버 사이드 코드 불가)

## 연락처

- 이메일: wo2021@gmail.com
- GitHub: wo2021-lang
