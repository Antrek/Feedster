app.directive('plusOne', function(){
  return{
    strict: 'E',
    scrope:
    {
      
    },
    templateUrl: 'js/directives/plusOne.html',
    link: function(scope, element, attrs) {
      scope.like = function() {
        element.toggleClass('btn-like'); 
      }
    }

  };
});