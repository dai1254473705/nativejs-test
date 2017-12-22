/*
 * 完成 extname 函数， 它会接受一个文件名作为参数， 你需要返回它的扩展名。
 * 例如， 输入 emoji.png， 返回.png。
 */

const extname = (filename) => {
    if (!filename) return "";
    filename = typeof filename === 'string' ? filename : filename.toString();
    let res = '';
    let last_dot_count = filename.lastIndexOf('.');
    if (last_dot_count === -1 || last_dot_count === 0) {
        res = '';
    } else {
        console.log(last_dot_count);
        res = filename.substring(last_dot_count, filename.length);
        console.log(res);
    }
    return res;
}
extname('.hello');