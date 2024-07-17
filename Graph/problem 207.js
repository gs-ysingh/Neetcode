var canFinish = function(numCourses, prerequisites) {
    const graph = Array(numCourses).fill(0).map(() => []);
    const inDegree = Array(numCourses).fill(0);

    for(let i = 0; i < prerequisites.length; i++) {
        const target = prerequisites[i][0];
        const source = prerequisites[i][1];
        graph[source].push(target);
        inDegree[target] = inDegree[target] + 1;
    }

    const sources = [];
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            sources.push(i);
        }
    }

    const sortOrder = [];

    while(sources.length > 0) {
        const node = sources.shift();
        sortOrder.push(node);

        graph[node].forEach((item) => {
            inDegree[item] = inDegree[item] - 1;
            if(inDegree[item] === 0) {
                sources.push(item);
            }
        });
    }

    return sortOrder.length === numCourses;
};

console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false