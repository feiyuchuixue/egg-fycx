'use strict';
module.exports = app => {

  return {
    getCurrentDateTime() {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let second = date.getSeconds();
      month = month + 1 > 9 ? month + 1 : '0' + (month + 1);
      day = day > 9 ? day : '0' + day;
      hour = hour > 9 ? hour : '0' + hour;
      minutes = minutes > 9 ? minutes : '0' + minutes;
      second = second > 9 ? second : '0' + second;
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second;

    },
    getCurrentDate() {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      month = month + 1 > 9 ? month + 1 : '0' + (month + 1);
      day = day > 9 ? day : '0' + day;
      return year + '-' + month + '-' + day;
    },
    getCurrentTime() {
      const date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let second = date.getSeconds();
      hour = hour > 9 ? hour : '0' + hour;
      minutes = minutes > 9 ? minutes : '0' + minutes;
      second = second > 9 ? second : '0' + second;
      return hour + ':' + minutes + ':' + second;

    },
    getZhCurrentDateTime() {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let second = date.getSeconds();
      const days = date.getDay();
      const show_day = new Array('星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日');
      month = month + 1 > 9 ? month + 1 : '0' + (month + 1);
      day = day > 9 ? day : '0' + day;
      hour = hour > 9 ? hour : '0' + hour;
      minutes = minutes > 9 ? minutes : '0' + minutes;
      second = second > 9 ? second : '0' + second;
      return year + '年' + month + '月' + day + '日 ' + show_day[days - 1] + ' ' + hour + ':' + minutes + ':' + second;

    },


  };
};
