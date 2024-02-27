const parseArgs = () => {
    const params = process.argv.slice(2).toString();
    const paramArray = params.split(',');
    let result = '';
    paramArray.forEach(element => {
       if (element.indexOf('--') !== -1)  {
            result = result + element.replace('--', '') + ' ' + 'is ';
        } else {
            result = result + element + ',';
        }
    });
    result = result.slice(0, -1);
    console.log(result);
};

parseArgs();