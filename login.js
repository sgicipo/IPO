document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const broker = document.getElementById("broker").value.trim();
        const account = document.getElementById("account").value.trim();

        if (username && broker && account) {
            try {
                const response = await fetch("data.json");
                const data = await response.json();

                const user = data.users.find(u => 
                    u.name === username && 
                    u.combo === broker && 
                    u.account === account
                );

                if (user) {
                    const totalValue = user.stockPrice * user.sharesOwned;
                    console.log("User found:", user);
                    console.log("Total value:", totalValue);
                
                    const userData = {
                        name: username,
                        account: account,
                        combo: broker,
                        stockPrice: user.stockPrice,      // 추가
                        sharesOwned: user.sharesOwned,    // 추가
                        totalValue: totalValue
                    };
                
                    // 데이터를 Base64로 인코딩하여 URL 해시로 전달
                    const encodedData = encodeURIComponent(encodeBase64(JSON.stringify(userData)));
                
                    // URL 해시에 데이터를 추가
                    window.location.href = `account.html#${encodedData}`;
                }
                                 else {
                    console.log("User not found.");
                    showErrorMessage("회원 정보가 일치하지 않습니다.");
                }

            } catch (error) {
                console.error("데이터 불러오기 실패:", error);
                showErrorMessage("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
            }
        } else {
            showErrorMessage("모든 정보를 올바르게 입력해 주세요.");
        }
    });

    function showErrorMessage(message) {
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.classList.remove('hidden');
            errorMessage.style.display = "block";
        }
    }

    // Base64 UTF-8 인코딩 함수
    function encodeBase64(input) {
        return btoa(unescape(encodeURIComponent(input)));
    }
});
