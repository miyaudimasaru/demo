// JavaScript Document
$(function(){
	var list = new ArchiveLinkList({
		body : $('.archive_link_list')
	});
	var more = new LoadMoreElement({
		target : $('.product_gallery_list'),
		trigger : $('.more_btn a'),
		post_per_page : 6,
		multiple : 6
	});
	
});