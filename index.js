import { getPopularCourse, test } from './src/apis/index.js'

const main = async () => {
    const [a, b] = await getPopularCourse()
    console.log(a, b)
}

main()