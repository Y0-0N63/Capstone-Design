// 폼 제출 이벤트 리스너 추가
document.getElementById('findUsernameForm').addEventListener('submit', function(event) {
    // 기본 폼 제출 동작 막기
    event.preventDefault();
    
    // 사용자 입력 값 가져오기
    const username = document.getElementById('username').value;
    const number = document.getElementById('userphone').value;

    // 입력 값 검증
    if (!username || !userphone) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    
    console.log('이름:', username);
    console.log('휴대폰 번호:', userphone);

    // 아이디 찾기 성공 시 동작 
    alert('아이디 찾기 요청이 완료되었습니다!');
});
