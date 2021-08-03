import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' } with an alias the url does not redirect
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } 
      ]
    }, //our-domain.com/teams => TeamsList
    { 
      path: '/users', 
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      } 
    },
    // passing params (teamId) as props using the props option equal to true
    // { path: '/:notFound(.*)', redirect: '/teams'}
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savePosition) {
    // console.log(to, from, savePosition)
    if (savePosition) {
      return savePosition
    }
    return {
      left: 0,
      top: 0
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if(to.meta.needsAuth){
    console.log('Needs auth!')
  }
  // next(false);
  // next('/users');
  // if (to.name === 'team-members') {
  //   next();
  // }
  // next({name: 'team-members', params: {teamId: 't2'}})
  next();
});

router.afterEach((to, from) => {
  // useful for sending analytics data
  console.log(to, from);
})


export default router;