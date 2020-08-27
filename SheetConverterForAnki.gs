/*****************************************************************************************************/
/******************************** Script created by Cindy Chiffoleau *********************************/
/*                                                                                                   */
/************ Creative Commons Attribution-NonCommercial 4.0 International Public License ************/
/*                                                                                                   */
/********* For more informations about this script, send email to contact@cindychiffoleau.fr *********/
/*                                                                                                   */
/*****************************************************************************************************/

function sheetConverter() {
  var docName = SpreadsheetApp.getActiveSpreadsheet().getName();
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  var folders = DriveApp.getFoldersByName(docName);
  var folder;
  var files;
  var search;
  
  // You can change name of the exported file here, for example changing "lecon" by "lesson".
  var txtFileName = docName + '-lecon-' + sheet.getName()+ '.txt';

  var ui = SpreadsheetApp.getUi();
  
  // Data retrieval
  data.shift();
  var text = data.map(function (a) {
    return a.join(';');
  }).join('\n');

  // Checking the existence or not of the extraction file
  if(folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(docName);
  }
  
  // Checking the existence or not of the extracted file
  search = 'title contains "' + txtFileName + '" and parents in "' + folder.getId() + '"';
  files = DriveApp.searchFiles(search);
  
  if (files.hasNext()) {
    var file = files.next().setTrashed(true);
    DriveApp.createFile(txtFileName, text, MimeType.PLAIN_TEXT).moveTo(folder);
    
    // You can change the alert message here, for example changing 'Succès' by 'Success'
    // and the next line : 'Le fichier "' + txtFileName + '" a bien été mis à jour dans le dossier "' + docName + '".',
    // by 'File "' + txtFileName + '" has been successfully updated in folder "' + docName + '".',
    ui.alert(
     'Succès',
     'Le fichier "' + txtFileName + '" a bien été mis à jour dans le dossier "' + docName + '".',
      ui.ButtonSet);
  } else {
    DriveApp.createFile(txtFileName, text, MimeType.PLAIN_TEXT).moveTo(folder);
    
    // You can change the alert message here, for example changing 'Succès' by 'Success'
    // and the next line : 'Le fichier "' + txtFileName + '" a bien été créé et ajouté au dossier "' + docName + '".',
    // by 'File "' + txtFileName + '" has been successfully created and added to folder "' + docName + '".',
    ui.alert(
     'Succès', 
     'Le fichier "' + txtFileName + '" a bien été créé et ajouté au dossier "' + docName + '".',
      ui.ButtonSet);
  }
  
}