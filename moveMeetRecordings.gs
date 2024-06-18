function moveMeetRecordings() {
  var sourceFolderId = 'SOURCE_FOLDER_ID'; // Source 폴더 아이디 ex) https://drive.google.com/drive/u/0/folders/folder-id
  var targetFolderId = 'SHARED_FOLDER_ID'; // 공유 폴더 ID
  var sourceFolder = DriveApp.getFolderById(sourceFolderId);
  var targetFolder = DriveApp.getFolderById(targetFolderId);

  var files = sourceFolder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    if (!targetFolder.getFilesByName(file.getName()).hasNext()) {
      file.makeCopy(targetFolder);
      file.setTrashed(true); // 원본 파일을 삭제 (필요시)
    }
  }
}
