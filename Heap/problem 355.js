var Twitter = function() {
    this.count = 0;
    this.followMap = {};
    this.tweetMap = {};
    this.limit = 10;
};

Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.tweetMap[userId]) {
        this.tweetMap[userId] = [];
    }
    this.tweetMap[userId].push([this.count, tweetId]);
    this.count++;
};

Twitter.prototype.getNewsFeed = function(userId) {
    const minHeap = new MinPriorityQueue();
    const self = this;
    function getFeed(tweets) {
        for (let i = 0; i < tweets.length; i++) {
            const [count, tweetId] = tweets[i];
            minHeap.enqueue(tweetId, count);
            if(minHeap.size() > self.limit) { // important. If we don't have this, we will have more than 10 tweets in the heap
                minHeap.dequeue();
            }
        }
    }
    // Add user's own tweets
    getFeed(this.tweetMap?.[userId] || []);

    // Add tweets of all the followees
    if (this.followMap[userId]) {
        for (let followeeId of this.followMap[userId]) {
            getFeed(this.tweetMap?.[followeeId] || []);
        }
    }
    const newsFeed = [];
    while(minHeap.size() > 0) {
        newsFeed.push(minHeap.dequeue().element);
    }

    return newsFeed.reverse();
};


Twitter.prototype.follow = function(followerId, followeeId) {
    if (followerId == followeeId) {
        return;
    }
    if(!this.followMap[followerId]) {
        this.followMap[followerId] = new Set();
    }
    this.followMap[followerId].add(followeeId);
};

Twitter.prototype.unfollow = function(followerId, followeeId) {
     if (followerId == followeeId) {
        return;
    }
    if(this.followMap[followerId]) {
        this.followMap[followerId].delete(followeeId);
    }
};