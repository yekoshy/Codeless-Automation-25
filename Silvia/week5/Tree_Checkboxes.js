//testData object

const testCases = {}

// wrap in object for namespace and avoiding trouble with function names in the app
let treeAutoTodo = new function () {
    //Collapse all Button
    const collapsAllBtn = document.querySelector("#tree-node > div > button.rct-option.rct-option-collapse-all");
    // Expand all Button
    const expandAllBtn = document.querySelector("#tree-node > div > button.rct-option.rct-option-expand-all");

    // toggle Button for level 0
    const toggleBtnL0 = document.querySelector("#tree-node > ol > li > span > button");
    // toggle Buttons for level 1
    const toggleBtnL1 = document.querySelectorAll("#tree-node > ol > li > ol > li > span > button");
    const level1Titles = document.querySelectorAll("#tree-node > ol > li > ol > li > span > label > span.rct-title");
    //identifier for folders
    const closedFolderIconLocator =  'li svg.rct-icon.rct-icon-parent-close';
    const openFolderIconsLocator = 'li svg.rct-icon.rct-icon-parent-open';
    const fileIconLocator = ' li svg.rct-icon.rct-icon-leaf-close ')

    const completeTree = {
        level0:[name:'Home', icon:'folder'],
        level1:[{name: 'Desktop', icon:folder}, {name:'Documents', icon:, 'folder'}, {name:'Downloads', icon:'folder'], 
        level2_desktop:
            [{name:'Notes', icon:'file'},{name:'Commands', icon:'file'}], 
        level2_documents:
            [{name:'workSpace', icon:'folder'}, {name:'Office', icon:'folder'}], 
        level2_downloads:
            [{name:'Word File.doc', icon:'file'}, {name:'Excel File.doc', icon:'file'}], 
        level3_documents_workspace:
            [{name:'React', icon:'file'},{name:'Angular', icon:'folder'},{name:'Veu', icon:'file'}], 
        level3_documents_office:
            [{name:'Public', icon:'file'}, {name:'Private', icon:'file'}, {name:'Classified', icon:'file'}, {name:'General', icon:'file'}]
    }

    /*work these (probably label[for]) into completeTree, bc selected list uses those:
home
desktop
notes
commands
documents
workspace
react
angular
veu
office
public
private
classified
general
downloads
wordFile
excelFile


*/

    this.expandAll = function(){
        expandAllBtn.click();
        }
    this.expandAllAssert = function(){
        this.expandAll();
        
        
        
    }
}