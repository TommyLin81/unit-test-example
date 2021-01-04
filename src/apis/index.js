import fetch from 'node-fetch'

export const getPopularCourse = async () => {
    try {
        const responseBody = await fetch('https://manage.iiiedu.org.tw/api/v1/class/creditCardStatus/123')
        if(!responseBody.ok){
            throw new Error('response status not 200')
        }
        const responseData = await responseBody.json()

        return [ true, responseData ]
    } catch (error) {
        console.log('Error: ', error)
        return [ false, [] ]
    }
}

export default { getPopularCourse }