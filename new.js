class Solution {
    getSecondLargest(arr) {
        let i;
        let max=Math.max(arr[0],arr[1]);
        let smax=Math.min(arr[0],arr[1]);
        for(i=2;i<arr.length;i++)
        {
            if(arr[i]>max)
            {
                smax=max;
                max=arr[i];
            }
            if(arr[i]<max && arr[i]>smax)
            {
                smax=arr[i];
            }
        }
        if(max===smax)
        {
            return -1;
        }
        else
        {
            return smax;
        }
        
    }
}