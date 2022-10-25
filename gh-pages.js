import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/nxzhong/nxzhong.github.io.git',
  user: {
   name: 'Nick Zhong',
   email: 'nickzhong63@gmail.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);