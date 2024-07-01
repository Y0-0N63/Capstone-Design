// 폼 제출 이벤트 리스너 추가
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 기본 폼 제출 동작 막기
    event.preventDefault();
    
    
    // 사용자 입력 값 가져오기
    const userid = document.getElementById('userid').value;
    const userpwd = document.getElementById('userpwd').value;

    // 아이디와 비밀번호 입력 여부 확인
    if (!userid || !userpwd) {
        alert('아이디와 비밀번호를 모두 입력하세요.');
        return;
    }


    console.log('아이디:', userid);
    console.log('비밀번호:', userpwd);

    // 로그인 성공 시 동작 
    alert('로그인 성공!');
});
