import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';
import popupWebpackConfig from './popup/webpack.config';
import eventWebpackConfig from './event/webpack.config';

const plugins = loadPlugins();



gulp.task('popup-js', ['clean'], (cb) => {
  webpack(popupWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('event-js', ['clean'], (cb) => {
  webpack(eventWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('copy-manifest', ['clean'], () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

gulp.task('build', ['copy-manifest', 'popup-js', 'event-js']);

gulp.task('watch', ['default'], () => {
  gulp.watch('popup/**/*', ['build']);
  gulp.watch('event/**/*', ['build']);
});

gulp.task('default', ['build']);
