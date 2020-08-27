# Sheet Converter for Anky

This is a little script to extract Google Sheet document to .txt file and then import it on Anki software.


## Installation

1. Create a Google Sheet document or use an existing sheet. You can use this template if you don't want to bother with formatting: [Sheet template for Anki](https://docs.google.com/spreadsheets/d/1auzOmFewXUEI4mhCxcd1vTrpbiLbwbxaS9IoLp9ruok/edit?usp=sharing).
2. Go to **Tools** and then **Script editor**.
3. Copy/paste the code of this repository into the blank page. /!\ Be careful to delete this code before : 
```
function myFunction() {

}
```
4. Save and close script editor.
5. On your Sheet document, go to **Tools** and then **Macros**. Click **Import**.
6. A dialog will open. At this moment, click **Add function**. Close the dialog.

(optional) You can add a shortcut to launch the script quickly:
1. Go to **Tools** then **Macros** then **Manage macros**.
2. Choose the Sheet Converter function in the list. 
3. Assign a keyboard shortcut to the macro. 
4. Click **Update** to save the configuration.
  

## Usage

1. On your Sheet document, fill in the table with the desired data.
2. When you want to export your data, you have to launch the macro with your shortcut or manually: go to **Tools** and then **Macros**. Click **sheetConverter**.
3. Your data are exported! You can find the .txt on your Google Drive, into a dedicated folder (named like your Sheet document).


## Contributing
Pull requests are welcome. For any change, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[Creative Commons Attribution-NonCommercial 4.0 International Public License (CC-BY-NC)](https://creativecommons.org/licenses/by-nc/4.0/legalcode)
