import { PopularCourseService } from './PopularCourseService'
import apiModule from '../apis'
import {expect, jest} from '@jest/globals' // 使用ESM import模式要改用@jest/globals  https://github.com/facebook/jest/issues/9430#issuecomment-616232029

const mockFetch = jest.spyOn(apiModule, 'getPopularCourse')

describe('test service PopularCourseService', () => {
    afterEach(()=> {
        PopularCourseService.singleton = undefined
        mockFetch.mockClear()
    })

    test('測試getSingleton的回傳值, singleton 的狀態變化', () => {
        expect(undefined).toEqual(PopularCourseService.singleton)
        const isEqual = PopularCourseService.getSingleton() === PopularCourseService.getSingleton()
        expect(new PopularCourseService()).toEqual(PopularCourseService.singleton)
        expect(isEqual).toEqual(true)
    })

    test('測試constructor後 dataState和popularCourseData 的狀態變化', () => {
        const testClass = new PopularCourseService()
        expect(testClass.dataState).toEqual('IDLE')
        expect(testClass.popularCourseData).toEqual([])
    }) 

    test('測試fatchData 成功和失敗後 popularCourseData和dataState 的狀態變化', async () => {
        mockFetch
            .mockReturnValueOnce(Promise.resolve([true, 'test']))
            .mockReturnValueOnce(Promise.resolve([false, 'fail']))
        const testClass = new PopularCourseService()

        // 第一次成功
        await testClass.fatchData()
        expect(testClass.popularCourseData).toEqual('test')
        expect(testClass.dataState).toEqual('SUCCESS')
        expect(mockFetch).toBeCalledTimes(1)

        // 第二次失敗
        await testClass.fatchData()
        expect(testClass.popularCourseData).toEqual('fail')
        expect(testClass.dataState).toEqual('ERROR')
        expect(mockFetch).toBeCalledTimes(2)
    })
    
    test('測試getState 的回傳值', async () => {
        const testClass = new PopularCourseService()
        testClass.dataState = 'SUCCESS'
        const clssState = testClass.getState()
        expect(clssState).toEqual('SUCCESS')
    })
})