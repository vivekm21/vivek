function findKthLargest(nums, k) {
    if (k < 1 || nums == null) {
        return 0;
    }
    return getKth(nums.length - k +1, nums, 0, nums.length - 1);
}
 
function getKth(k, nums, start, end) {
 
    var pivot = nums[end];
 
    var left = start;
    var right = end;
 
    while (true) {
 
        while (nums[left] < pivot && left < right) {
            left++;
        }
 
        while (nums[right] >= pivot && right > left) {
            right--;
        }
 
        if (left == right) {
            break;
        }
 
        swap(nums, left, right);
    }
 
    swap(nums, left, end);
 
    if (k == left + 1) {
        return pivot;
    } else if (k < left + 1) {
        return getKth(k, nums, start, left - 1);
    } else {
        return getKth(k, nums, left + 1, end);
    }
}
 
function swap(nums, n1, n2) {
    var tmp = nums[n1];
    nums[n1] = nums[n2];
    nums[n2] = tmp;
}

console.log(findKthLargest([1,2,5,3,7,4],2));
