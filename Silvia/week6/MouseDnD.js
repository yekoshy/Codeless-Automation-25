//https://demoqa.com/droppable

//define source and target
//simpleDrop
const dragSimple = document.querySelector('#simpleDropContainer #draggable');
const dropSimple = document.querySelector('#simpleDropContainer #droppable');
//accepted Drop Y/N
const acceptableSource = document.querySelector('#acceptDropContainer #acceptable');
const notAcceptableSource = document.querySelector('#acceptDropContainer #notAcceptable');
const acceptableTarget = document.querySelector('#acceptDropContainer #droppable');
const ppSource = document.querySelector('#droppableExample-tabpane-preventPropogation #dragBox');
const notGreedyInner = document.querySelector('#droppableExample-tabpane-preventPropogation #notGreedyInnerDropBox');
const notGreedyParent = document.querySelector('#droppableExample-tabpane-preventPropogation #notGreedyDropBox');
const greedyInner = document.querySelector('#droppableExample-tabpane-preventPropogation #greedyDropBoxInner')
const greedyParent = document.querySelector('#droppableExample-tabpane-preventPropogation #greedyDropBox')
const notRevertable = document.querySelector('#revertableDropContainer #notRevertable');
const revertable = document.querySelector('#revertableDropContainer #revertable');
const rTarget = document.querySelector('#revertableDropContainer #droppable');




let testcases = [
{name:'simpleDrop', link:'#droppableExample-tab-simple', 
source: dragSimple, target: dropSimple, canDrop: true, 
targetClassPre:".ui-droppable", expectedText: 'Dropped!', 
expectedClass:".ui-state-highlight"  },
{name:'accepted', link:'#droppableExample-tab-accept', 
source: acceptableSource, target: acceptableTarget, canDrop: true, 
targetClassPre:".ui-droppable-active", expectedText: 'Dropped!', 
expectedClass:".ui-state-highlight"  },
{name:'notAccepted', link:'#droppableExample-tab-accept', 
source: notAcceptableSource, target: acceptableTarget, canDrop: false, 
targetClassPre:".ui-droppable", expectedText: 'Drop here', notExpectedClass:".ui-state-highlight"},
{name:'preventPropogation01', link:'#droppableExample-tab-preventPropogation', 
source: ppSource, target: notGreedyInner, canDrop: true, changeParent:true,
targetClassPre:".ui-droppable-active", expectedText: 'Dropped!', expectedClass:".ui-state-highlight"},
{name:'preventPropogation02', link:'#droppableExample-tab-preventPropogation', 
source: ppSource, target: notGreedyParent, canDrop: true, changeParent:true,
targetClassPre:".ui-droppable-active", expectedText: 'Dropped!', expectedClass:".ui-state-highlight"},
{name:'preventPropogation03', link:'#droppableExample-tab-preventPropogation', 
source: ppSource, target: greedyInner, canDrop: true, changeParent:true,
targetClassPre:".ui-droppable-active", expectedText: 'Dropped!', expectedClass:".ui-state-highlight"},
{name:'preventPropogation04', link:'#droppableExample-tab-preventPropogation', 
source: ppSource, target: greedyParent, canDrop: true, changeChild:false,
targetClassPre:"ui-droppable-active", expectedText: 'Dropped!', expectedTextParent: 'Outer droppable', notExpectedClass:"ui-state-highlight"},
{name:'notRevertable', link:'#droppableExample-tab-revertable', 
source: notRevertable, target: rTarget, canDrop: true, position:'dropPosition',
targetClassPre:"ui-droppable-active", expectedText: 'Dropped!', expectedClass:"ui-state-highlight"},
{name:'revertable', link:'#droppableExample-tab-revertable', 
source: revertable, target: rTarget, canDrop: true,  position:'startPosition',
targetClassPre:"ui-droppable-active", expectedText: 'Dropped!', expectedClass:"ui-state-highlight"},

];

//assetions for prevent propagation and reverst not complete
// reload of page before each testcase not implemented bc of fullScreen ads,
// manual reload of page between 1 and 2; 3,4,5, and 6, and 7 and 8 required

function myDnD (testcase){
    document.querySelector(testcase.link).click();
    dragSource = testcase.source;
    dragSourceBox = testcase.source.getBoundingClientRect();
    dropTarget = testcase.target;
    dropTargetBox = testcase.target.getBoundingClientRect();
    dragSource.dispatchEvent(new MouseEvent('mousedown', {bubbles: true,cancelable: true,
        clientX: (dragSourceBox.x + dragSourceBox.width/2),
        clientY: (dragSourceBox.y + dragSourceBox.height/2),
        view: window}));
    dragSource.dispatchEvent(new MouseEvent('mousemove', {bubbles:true, cancelable:true, 
        clientX: (dropTargetBox.left + dropTargetBox.width/2), 
        clientY: (dropTargetBox.top + dropTargetBox.height/2), 
        view:window}));
        //console.assert('check ist dropTarget has targetClassPre');
    dragSource.dispatchEvent(new MouseEvent
        ('mouseup', {bubbles:true, cancelable:true, 
        clientX: (dropTargetBox.left + dropTargetBox.width/2), 
        clientY: (dropTargetBox.top + dropTargetBox.height/2), 
        view:window}));

        
        console.assert(dropTarget.innerText == testcase.expectedText, `Expected ${testcase.expectedText}, found ${dropTarget.innerText}`);
        if (testcase.canDrop == true){
            console.assert(dropTarget.matches(testcase.expectedClass), `Expected ${testcase.expectedClass}, found ${dropTarget.classList}`)
        }else {
            console.assert((dropTarget.matches(testcase.notExpectedClass)== false, `Expected ${testcase.notExpectedClass} not present, found ${dropTarget.classList}`)
    )
        }
       
        
       
    }


    
