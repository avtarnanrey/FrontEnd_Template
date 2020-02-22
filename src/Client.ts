export default function req(url: string, data: any = {}, options?: RequestInit) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: options && (options.method || "GET"),
            mode: options && (options.mode || "same-origin"),
            cache: options && (options.cache || "default"),
            credentials: options && (options.credentials || "same-origin"),
            headers: options && ({ ...options.headers } as any || { "Content-Type": "application/json" }),
            redirect: options && (options.redirect || "follow"),
            referrer: options && (options.referrer || "client"),
           ...( options && options.method && { body: JSON.stringify(data) }),
        }).then(response => {
            resolve(response.json())
        })
        .catch( err => {
            resolve({
                "error": JSON.stringify(err)
            })
        })
    })
}