function checkDuplicate() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('아이디를 입력해주세요.');
        return;
    }
    // 실제 중복 확인 로직
    console.log('중복 확인할 아이디:', username);
    alert('중복 확인 요청이 완료되었습니다!');
}

function sendVerificationCode() {
    const phone = document.getElementById('phone').value;
    if (!phone) {
        alert('전화번호를 입력해주세요.');
        return;
    }
    // 실제 인증번호 발송 로직
    console.log('인증번호 발송할 전화번호:', phone);
    alert('인증번호가 발송되었습니다!');
}

function verifyResidentID() {
    const jumin = document.getElementById('jumin').value;
    if (!jumin) {
        alert('주민등록번호를 입력해주세요.');
        return;
    }
    // 실제 주민등록번호 확인 로직
    console.log('확인할 주민등록번호:', jumin);
    alert('주민등록번호 확인이 완료되었습니다!');
}

function searchPostalCode() {
    const address = document.getElementById('address').value;
    if (!address) {
        alert('주소를 입력해주세요.');
        return;
    }
    // 실제 우편번호 검색 로직
    console.log('우편번호 검색할 주소:', address);
    alert('우편번호 검색이 완료되었습니다!');
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }
    // 회원가입 로직
    alert('회원가입이 완료되었습니다!');
});
