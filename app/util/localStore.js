export default {
    getItem:(key) => {
        let value
        try {
            value = localStorage.getItem(key)
        }catch (ex){
            //开发环境下error
            if(__DEV__){
                console.error('localStorage.getItem报错,',ex.message)
            }
        }finally {
            return value;
        }
    },
    setItem:(key,value) => {
        try {
            //ios safari无痕模式下，直接使用localStorage.setItem会报错
            localStorage.setItem(key,value)
        }catch (ex){
            //开发环境下提示error
            if(__DEV__){
                console.error('localStorage.setItem报错,',ex.message)
            }else{
                alert("您正处于无痕模式，无法为您保存！")
            }
        }
    }
}