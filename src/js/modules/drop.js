export const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
    fileInputs.forEach((fileInput) => {
      fileInput.addEventListener(eventName, preventDefaults, false);
    });
  });

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highlight = (item) => {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.background = 'rgba(0,0,0, .7)';
  };

  const unhighlight = (file) => {
    file.closest('.file_upload').style.border = 'none';
    if (file.closest('.calc_form')) {
      file.closest('.file_upload').style.background = '#fff';
    } else {
      file.closest('.file_upload').style.background = '#ededed';
    }
  };

  ['dragenter', 'dragover'].forEach((eventName) => {
    fileInputs.forEach((fileInput) => {
      fileInput.addEventListener(eventName, () => highlight(fileInput), false);
    });
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    fileInputs.forEach((fileInput) => {
      fileInput.addEventListener(
        eventName,
        () => unhighlight(fileInput),
        false,
      );
    });
  });

  fileInputs.forEach((fileInput) => {
    fileInput.addEventListener('drop', (e) => {
      fileInput.files = e.dataTransfer.files;
      let dots;
      const file = fileInput.files[0],
        fileName = file.name.split('.')[0],
        fileType = file.name.split('.')[1];

      fileName.length > 6 ? (dots = '...') : (dots = '.');
      const name = `${fileName.substring(0, 6)}${dots}${fileType}`;
      fileInput.previousElementSibling.textContent = name;
    });
  });
};
