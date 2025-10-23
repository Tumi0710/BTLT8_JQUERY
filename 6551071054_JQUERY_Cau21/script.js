$(document).ready(function() {
  $('#addBtn').click(function() {
    let newItem = $('#newItem').val().trim();
    if (newItem === '') {
      alert("Vui lòng nhập tên công việc!");
      return;
    }

    let li = $('<li></li>').text(newItem);
    let delBtn = $('<button>X</button>');

    delBtn.click(function() {
      $(this).parent().fadeOut(300, function() {
        $(this).remove();
      });
    });

    li.click(function() {
      $(this).toggleClass('completed');
    });

    li.append(delBtn);
    $('#todoList').append(li.hide().fadeIn(300));
    $('#newItem').val('');
  });

  $('#newItem').keypress(function(e) {
    if (e.which === 13) {
      $('#addBtn').click();
    }
  });
});
