document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginForm = document.querySelector(".auth-form");
  const loginButton = loginForm.querySelector('button[type="submit"]');

  emailInput.addEventListener("blur", function () {
    if (!isNotEmpty(this.value)) {
      showError(this, "이메일을 입력해주세요.");
    } else if (!isValidEmail(this.value)) {
      showError(this, "잘못된 이메일 형식입니다.");
    } else {
      removeError(this);
    }
    validateForm();
  });

  passwordInput.addEventListener("blur", function () {
    if (!isNotEmpty(this.value)) {
      showError(this, "비밀번호를 입력해주세요.");
    } else if (!isValidPasswordLength(this.value)) {
      showError(this, "비밀번호를 8자 이상 입력해주세요.");
    } else {
      removeError(this);
    }
    validateForm();
  });

  // 입력 변화 감지 -> 폼 유효성 검사
  emailInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);

  function validateForm() {
    const isEmailValid =
      isNotEmpty(emailInput.value) && isValidEmail(emailInput.value);
    const isPasswordValid =
      isNotEmpty(passwordInput.value) &&
      isValidPasswordLength(passwordInput.value);

    const hasErrors =
      document.querySelectorAll('[class*="text-error"]').length > 0;

    setButtonState(loginButton, isEmailValid && isPasswordValid && !hasErrors);
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!loginButton.disabled) {
      window.location.href = "items.html";
    }
  });

  validateForm();
});
