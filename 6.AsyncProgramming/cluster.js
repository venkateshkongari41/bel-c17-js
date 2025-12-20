const cluster = require('cluster');
const http = require('http');
const os = require('os');

// this is to set the scheduling policy of cluster (by default it is SCHED_NONE)
cluster.schedulingPolicy = cluster.SCHED_RR; // round robin

const numCPUs = os.cpus().length -1 ; // 14 -1 // 13


// master node code
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    console.log('Number of CPUs is ', numCPUs);

    for(let i = 0; i < numCPUs; i++) {
        cluster.fork(); // create slave/copies node 
    }

    // listen to message from slave nodes
    // for (const id in cluster.workers) {
    //     cluster.workers[id].on('message', (msg) => {
    //         if (msg.type && msg.type === 'health-check') {
    //             console.log(`Master ${process.pid} received health check from worker ${id}`);
    //             console.log(`Memory Usage: `, msg.memoryUsage);
    //             console.log(`CPU Usage: `, msg.cpuUsage);
    //         }
    //     });
    // }


    // send the health check request 
    // setInterval(() => {
    //     for (const id in cluster.workers) {
    //         cluster.workers[id].send({
    //             type: 'health-check',
    //             memoryUsage: process.memoryUsage(),
    //             cpuUsage: process.cpuUsage()
    //         });
    //     }
    
    // }, 1000);

    cluster.on('message', (msg) => {
        console.log('Master received message : ', msg);
    });


    // listner for dying slaves

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log('total cluster left is ', Object.keys(cluster.workers).length);
        cluster.fork();
        console.log('New worker created ', Object.keys(cluster.workers).length);
    });


} else {
    // slave node code - actual server 

    // health check - send the health check 

    // process.on('message', (msg) => {
    //     if (msg.type && msg.type === 'health-check') {
    //         console.log(`Worker ${process.pid} received health check request from master`, msg);
            
    //     }
    // });

    process.send({
                type: 'health-check',
                memoryUsage: process.memoryUsage(),
                cpuUsage: process.cpuUsage()
            });


    const server = http.createServer((req, res) => {
        // create endpinnts 
        // create db connect
        // create models 
        // create routes
        // create service
        res.writeHead(200);
        res.end('Hello World\n by cluster node ' + process.pid);
    })

    server.listen(8089, () => {
        console.log(`slave pid ${process.pid} `);
    });
}