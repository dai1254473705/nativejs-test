/*
 * 完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五。
 * 12345 ==> 一万二千三百四十五
 * 1212 1002
 * 一千二百一十二 
 */
const toChineseNum = (num) => {
    if (!num) return '';
    //result
    let result;
    if (num == 0) return 0;

    num = typeof num === 'number' ? num.toString().split('').reverse() : num.split('').reverse();

    // TODO
    let captial = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    let unit = ['', '十', '百', '千', '万'];
    // 切分4位一组
    let one_arr = [];
    let two_arr = [];
    let one_res = '';
    let two_res = '';

    if (num.length > 4) {
        one_arr = num.slice(0, 4);
        two_arr = num.slice(4);
    } else {
        one_arr = num;
        two_arr = [];
    }
    //先转化one_arr 为数组
    if (one_arr.join('') == 0) {
        one_res = '';
    } else {
        // //判断one_arr是否全部是0
        let linshiarr = [];
        one_arr.forEach((item, index) => {
            if (item == 0) {
                linshiarr.push('零');
            } else {
                linshiarr.push(captial[item] + unit[index]);
            }
        });
        // console.log(linshiarr);
        one_res = linshiarr.reverse().join('');
    }

    //转化two_arr 为数组
    if (two_arr.join('') == 0) {
        two_res = '';
    } else {
        // //判断one_arr是否全部是0
        let linshiarr2 = [];
        two_arr.forEach((item, index) => {
            if (item == 0) {
                linshiarr2.push('零');
            } else {
                linshiarr2.push(captial[item] + unit[index]);
            }
        });

        // console.log(linshiarr2);
        for (let i = linshiarr2.length - 1; i > 0; i--) {
            console.log("i", linshiarr2[i]);

            if (linshiarr2[i] != '零') {
                break;
            } else {
                linshiarr2.pop();
            }
        }
        two_res = linshiarr2.reverse().join('') + '万';
    }

    // console.log(one_res);
    // console.log(two_res);
    result = two_res + one_res;
    result = result.replace(/零零/g, '零');
    console.log(/零零/g.test(result));

    //去掉没有用的零
    let resultarr = result.split('');
    console.log("result", result);
    console.log("resultarr", resultarr);
    for (let i = resultarr.length - 1; i > 0; i--) {
        console.log("i", resultarr[i]);

        if (resultarr[i] != '零') {
            // console.log(result);
            return result;
        } else {
            result = result.slice(0, result.length - 1);
        }
    }
    return result;
}
toChineseNum(45002004);