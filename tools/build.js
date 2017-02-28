/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV='production';

console.log('genearting minified bundle from production via webpack'.blue);

webpack(webpackConfig).run((err,stats)=>{
    if(err)
    {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats=stats.toJson();
    if(jsonStats.hasErrors){
        return jsonStats.errors.map(error=>console.log(error.red));
    }
if(jsonStats.hasWarnings){
    console.log('webpack generated following warning'.bold.yellow);
    jsonStats.warnings.map(warning=>console.log(warning.yellow));
}
//console.log(`webpack status:${stats}`);
console.log('your app has been compiled '.green);
return 0;

});