import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import {mount} from 'react-mounter';

//layout
import AppLayout from '/imports/ui/layouts/App';

//pages
import Home from '/imports/ui/pages/Home';
import NotFound from '/imports/ui/pages/NotFound';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    mount(AppLayout, {
        yield: <Home />
  });
  },
});

FlowRouter.notFound = {
  action() {
    mount(AppLayout, {
        yield: <NotFound />
  });
  },
};
