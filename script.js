document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        th: {
            requestText: 'ได้ส่งคำขอเป็นเพื่อนถึงคุณ',
            confirmButton: 'ยืนยัน',
            deleteButton: 'ลบ'
        },
        en: {
            requestText: 'has sent you a friend request',
            confirmButton: 'Confirm',
            deleteButton: 'Delete'
        }
    };

    const nameInput = document.getElementById('nameInput');
    const imageInput = document.getElementById('imageInput');
    const langSelect = document.getElementById('langSelect');

    const displayName = document.getElementById('displayName');
    const profileImage = document.getElementById('profileImage');
    const requestTextPart = document.getElementById('requestTextPart');
    const confirmButton = document.getElementById('confirmButton');
    const deleteButton = document.getElementById('deleteButton');

    function updateLanguage() {
        const selectedLang = langSelect.value;
        const langData = translations[selectedLang];

        requestTextPart.textContent = ` ${langData.requestText}`;
        confirmButton.textContent = langData.confirmButton;
        deleteButton.textContent = langData.deleteButton;
    }

    function updateName() {
        displayName.textContent = nameInput.value || 'Waruntoru Paonil';
    }

    function updateImage(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }

    nameInput.addEventListener('input', updateName);
    imageInput.addEventListener('change', updateImage);
    langSelect.addEventListener('change', updateLanguage);

    function initialize() {
        updateName();
        updateLanguage();
    }

    initialize();
});
