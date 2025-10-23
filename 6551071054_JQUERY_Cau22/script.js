$(document).ready(function() {
  $('#addSkill').click(function() {
    $('#skills-section').append(`
      <div class="skill-row">
        <input type="text" class="skill-name" placeholder="Tên kỹ năng">
        <input type="range" class="skill-level" min="0" max="100" step="10" value="50">
      </div>
    `);
  });

  $('#cvForm').on('submit', function(e) {
    e.preventDefault();

    $('#cvResult').show();

    $('#cvName').text($('#name').val());
    $('#cvAddress').text("Địa chỉ: " + $('#address').val());
    $('#cvPhone').text("Điện thoại: " + $('#phone').val());
    $('#cvEmail').text("Email: " + $('#email').val());
    $('#cvJob').text("Nghề nghiệp: " + $('#job').val());

    const file = $('#avatar')[0].files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        $('#cvAvatar').attr('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }

    $('#cvSkills').empty();
    $('.skill-row').each(function() {
      let skillName = $(this).find('.skill-name').val();
      let skillLevel = $(this).find('.skill-level').val();

      let skillHTML = `
        <div class="cv-skill">
          <strong>${skillName}</strong>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${skillLevel}%;"></div>
          </div>
        </div>
      `;
      $('#cvSkills').append(skillHTML);
    });

    $('html, body').animate({ scrollTop: $('#cvResult').offset().top }, 600);
  });
});
