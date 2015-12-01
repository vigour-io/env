'use strict'

exports.platform = {
  on: {
    init: {
      env () {
        setTimeout(() => {
          this.parent.set({
            ready: true,
            bundleId: 'buzz',
            network: 'wifi',
            country: 'nl',
            language: 'en',
            region: 'GB',
            timezone: 'GMT+09:30',
            model: 'iPhone 6s',
            os: 'android',
            osVersion: 19,
            appVersion: 1
          })
        })
      }
    }
  }
}