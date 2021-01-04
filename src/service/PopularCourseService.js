import apiModule from '../apis'
export const popularCourseState = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}
export class PopularCourseService {
    static singleton = undefined
    popularCourseData = undefined
    dataState = undefined
    
    static getSingleton = () => {
        if(!PopularCourseService.singleton) {
            PopularCourseService.singleton = new PopularCourseService()
        }
        return this.singleton
    }

    constructor() {
        this.dataState = popularCourseState.IDLE
        this.popularCourseData = []
    }
    
    async fatchData() {
        this.dataState = popularCourseState.LOADING
        const [ isFetchSuccess, data ] = await apiModule.getPopularCourse()
        this.popularCourseData = data
        isFetchSuccess ? this.successDataProcessing() : this.failDataProcessing()
    }

    successDataProcessing() {
        this.dataState = popularCourseState.SUCCESS
    }

    failDataProcessing() {
        this.dataState = popularCourseState.ERROR
    }
    
    getState() {
        return this.dataState
    }
}