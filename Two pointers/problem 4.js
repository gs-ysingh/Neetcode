var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums2.length < nums1.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let l = 0;
    let h = nums1.length;
    const total = nums1.length + nums2.length;
    
    while (l <= h) {
        const m = Math.floor((l + h) / 2);

        // Calculate ALeft and ARight
        const ALeft = m > 0 ? nums1[m - 1] : -Infinity;
        const ARight = m < nums1.length ? nums1[m] : Infinity;

        // Calculate BLeft and BRight
        const partition2 = Math.floor((total + 1) / 2) - m;
        const BLeft = partition2 > 0 ? nums2[partition2 - 1] : -Infinity;
        const BRight = partition2 < nums2.length ? nums2[partition2] : Infinity;

        // Correct partition found
        if (ALeft <= BRight && BLeft <= ARight) {
            if (total % 2 === 0) {
                return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
            } else {
                return Math.max(ALeft, BLeft);
            }
        } else if (ALeft > BRight) {
            h = m - 1;  // Move the high pointer left
        } else {
            l = m + 1;  // Move the low pointer right
        }
    }
};