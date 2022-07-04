export function MapLoader() {
    return new Promise((resolve, reject) => {
        if (window.AMap) {
            resolve(window.AMap)
        }
        window.initAMap = () => {
            resolve(window.AMap)
        }
    })
}