import $ from 'jquery';

function InfoCards(){
    $.fn.commentCards = function(){

        return this.each(function(){
      
          var $this = $(this),
              $cards = $this.find('.sudoku-carddata'),
              $current = $cards.filter('.card--current'),
              $next;
      
          $cards.on('click',function(){
            if ( !$current.is(this) ) {
              $cards.removeClass('card--current card--out card--next');
              $current.addClass('card--out');
              $current = $(this).addClass('card--current');
              $next = $current.next();
              $next = $next.length ? $next : $cards.first();
              $next.addClass('card--next');
            }
          });
      
          if ( !$current.length ) {
            $current = $cards.last();
            $cards.first().trigger('click');
          }
      
          $this.addClass('cards--active');
      
        })
      
      };
      
      $('.cards').commentCards();
}

export {InfoCards};