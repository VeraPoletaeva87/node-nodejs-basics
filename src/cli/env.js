const parseEnv = () => {
    const params = process.env;
    let result = '';
    for (var prop in params) {
        if (prop.indexOf('RSS_') !== -1)  {
            result = result + prop + '=' + params[prop] + '; ';
        }
    }
    result = result.slice(0, -2);
    console.log(result);
};

parseEnv();