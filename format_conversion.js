// 1. 导入 fs 模块，来操作文件
const fs = require('fs')
const path = require('path')

var filePath = 'C:\/Users\/Me520\/Desktop\/前端资料\/学习笔记\/Web-master\/02-CSS基础'; //指定需要合并文件夹的路径
var filePath2 = 'C:\/Users\/Me520\/Desktop\/CSS基础.md'; //指定结果文件及格式(文件太大的话可能打不开)
var mdtxt = ""; //用来接收数据的字符串

//调用定时器来执行写文件的操作，解决同步异步的问题
setTimeout(function() {
    //console.log(mdtxt);
    fs.writeFile(filePath2, mdtxt, function(err) {
        // 2.1 如果文件写入成功，则 err 的值等于 null
        // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
        // console.log(err)

        if (err) {
            return console.log('文件写入失败！' + err.message)
        }
        console.log('文件写入成功！')
    })
}, 7000);
fileDisplay(filePath); //调用函数



// /** 
//  * 文件遍历方法 
//  * @param filePath 需要遍历的文件路径 
//  */
async function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表  
    fs.readdir(filePath, function(err, files) {
        //console.log(files);
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件列表  
            files.forEach(function(filename) {
                //获取当前文件的绝对路径  
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象  
                fs.stat(filedir, function(eror, stats) {
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile(); //是文件  
                        var isDir = stats.isDirectory(); //是文件夹  
                        if (isFile) {
                            // 2. 调用 fs.readFile() 方法读取文件
                            //    参数1：读取文件的存放路径
                            //    参数2：读取文件时候采用的编码格式，一般默认指定 utf8
                            //    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
                            fs.readFile(filedir, 'utf8', function(err, dataStr) {
                                if (err) {
                                    return console.log('读取文件失败！');
                                }
                                mdtxt = mdtxt + dataStr;
                            })
                        }
                        if (isDir) {
                            fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件  
                        }
                    }
                })
            });
        }
    });
}