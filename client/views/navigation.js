Template.navigation.events({
  'click .side-nav li a': function(event, template) {
    // Da es einen Bug in der sidenav hat & sidenav-overlay nicht immer entfernt wird, hier immer entfernen
     $('div[id^=sidenav-overlay]').remove();
  },
  'click div#sidenav-overlay': function(){
    $('div[id^=sidenav-overlay]').remove();
  },
  'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('loginRegister');
    }
});

// navigation template helpers
Template.navigation.helpers({
  'noAdminHidden': function() {
    if (Meteor.user()) {
      var shortname = Meteor.user().profile.shortname;
      var admins = ["stjo", "bret", "lfab", ""];              // vorläufig einfach alle Admins in einem Array gespeichert, später evtl in collection

      if(admins.indexOf(shortname) > -1) {
        return true;
      } else {
        return "hidden";
      }
    }
  },
  'noUserHidden': function() {
    if(!Meteor.user()) {
      return "hidden";
    }
  },
  'noUserShown': function() {
    if(Meteor.user()) {
      return "hidden";
    }
  }
});
