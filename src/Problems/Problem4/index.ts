class Node {
    public parent: Node | undefined;
    public left: Node;
    public right: Node;
    public value: string;
    public visited: boolean;

    constructor(parent: Node | undefined, value: string, left?, right?) {
        this.parent = parent;
        this.value = value;
        this.right = right;
        this.left = left;
        this.visited = false;
    }
}

const treeTraversal = (tree: Node): Function => {
    let _tree = tree;
    return function next() { //returns if has next traversal
        if(_tree.left && _tree.left.value && !_tree.left.visited){
            _tree = _tree.left;
            return true;
        }
        else if(_tree.right && _tree.right.value && !_tree.right.visited){
            _tree = _tree.right;
            return true;
        }
        else{
            if(_tree.parent){
                _tree.visited = true;
                const value = _tree.value;
                _tree = _tree.parent;

                return value;
            }
            else{
                if(!_tree.visited){
                    _tree.visited = true;
                    return _tree.value
                }
                return false;
            }
        }
    }
}

const serialize = (tree: Node) => {
    
}

const deserialize = (string) => {

}

const solve = () => {
    
    const root = new Node(undefined, "root");
    const right = new Node(root, "right");
    const left = new Node(root, "left");
    const leftright = new Node(left, "left.right");
    const leftleft = new Node(left, "left.left");
    const rightright = new Node(right, "right.right");
    const rightleft = new Node(right, "right.left");

    left.left = leftleft;
    left.right = leftright;
    right.left = rightleft;
    right.right = rightright;
    root.left = left;
    root.right = right;

    const traverser = treeTraversal(root);
    let hasNext = traverser();
    while (hasNext){
        console.log(hasNext)
        hasNext = traverser();
    }
}

const getTestsCoverage = (expected: number[], actual: number[]): number => {
    const coverageArray = expected.map((a, index) => a.toString() === actual[index].toString());
    return coverageArray.filter(coverageItem => coverageItem).length / coverageArray.length;
}

export const Problem3 = () => {
    const actual: any[] = [];
    const expected: any[] = [];

    solve();

    return "x";
    // return "coverage equal: " + getTestsCoverage(expected, actual);
}
