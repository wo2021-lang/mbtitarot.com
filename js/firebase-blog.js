/* ============================================================
   Firebase Blog System
   - Firestore CDN 방식 (npm 불필요)
   - 블로그 글 읽기/쓰기
   ============================================================ */

var firebaseConfig = {
  apiKey: "AIzaSyB0HtrsLdseaIeycmxkEKkpI6vtlBxGO0E",
  authDomain: "mbtitarot-a02c6.firebaseapp.com",
  projectId: "mbtitarot-a02c6",
  storageBucket: "mbtitarot-a02c6.firebasestorage.app",
  messagingSenderId: "496907077829",
  appId: "1:496907077829:web:94ba7f94d31831b49788ac",
  measurementId: "G-FV358Q6ZPE"
};

// Firebase 초기화 (CDN 방식)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

// ── 블로그 글 목록 가져오기 ──
function loadBlogPosts(callback) {
  db.collection('posts')
    .orderBy('createdAt', 'desc')
    .get()
    .then(function(snapshot) {
      var posts = [];
      snapshot.forEach(function(doc) {
        var data = doc.data();
        data.id = doc.id;
        posts.push(data);
      });
      callback(posts);
    })
    .catch(function(err) {
      console.error('블로그 로드 실패:', err);
      callback([]);
    });
}

// ── 블로그 글 하나 가져오기 ──
function loadBlogPost(postId, callback) {
  db.collection('posts').doc(postId).get()
    .then(function(doc) {
      if (doc.exists) {
        var data = doc.data();
        data.id = doc.id;
        callback(data);
      } else {
        callback(null);
      }
    })
    .catch(function(err) {
      console.error('글 로드 실패:', err);
      callback(null);
    });
}

// ── 블로그 글 저장 ──
function saveBlogPost(postData, callback) {
  postData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  postData.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  db.collection('posts').add(postData)
    .then(function(docRef) {
      callback(true, docRef.id);
    })
    .catch(function(err) {
      console.error('글 저장 실패:', err);
      callback(false, null);
    });
}

// ── 블로그 글 수정 ──
function updateBlogPost(postId, postData, callback) {
  postData.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  db.collection('posts').doc(postId).update(postData)
    .then(function() {
      callback(true);
    })
    .catch(function(err) {
      console.error('글 수정 실패:', err);
      callback(false);
    });
}

// ── 블로그 글 삭제 ──
function deleteBlogPost(postId, callback) {
  db.collection('posts').doc(postId).delete()
    .then(function() {
      callback(true);
    })
    .catch(function(err) {
      console.error('글 삭제 실패:', err);
      callback(false);
    });
}

// ── 날짜 포맷 ──
function formatDate(timestamp) {
  if (!timestamp) return '';
  var d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  var y = d.getFullYear();
  var m = ('0' + (d.getMonth() + 1)).slice(-2);
  var day = ('0' + d.getDate()).slice(-2);
  return y + '.' + m + '.' + day;
}
