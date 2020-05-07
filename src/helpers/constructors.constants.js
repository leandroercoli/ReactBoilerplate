function messageError(message = "") {
    return { success: false, message }
}

function messageSuccess(message = "") {
    return { success: true, message }
}

export const constructors = {
    messageError,
    messageSuccess
}