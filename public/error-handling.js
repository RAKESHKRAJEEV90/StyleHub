// error-handling.js

function showAlert(status, message) {
    switch (status) {
        case 400:
            showErrorAlert(message)
            break
        case 401:
            showUnauthorizedAlert()
            break
        // Add more cases for other status codes if needed
        default:
            showGenericErrorAlert()
    }
}

function showErrorAlert(message) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
    })
}

function showUnauthorizedAlert() {
    Swal.fire({
        icon: 'warning',
        title: 'Unauthorized',
        text: 'You are not authorized to access this page.',
    })
}

function showGenericErrorAlert() {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again later.',
    })
}
