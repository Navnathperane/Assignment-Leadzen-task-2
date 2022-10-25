//Identify whether the given linked list is cyclic or not?
var hasCycle= function(head){
	let fast=head;
	let slow=head;
	while(fast&&fast.next){
		fast=fast.next.next;
		slow=slow.next;
		
		if(fast===slow)
		{
			return true;
		}
	}
	return false;
};
