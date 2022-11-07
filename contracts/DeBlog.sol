//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

contract DeBlog {
    event BlogAdded(
        uint256 blogId,
        address owner,
        string blogTitle,
        string subTitle,
        string authorName,
        string blogContent,
        uint blogUploaded,
        string coverImage
    );

    struct Blog {
        uint256 blogId;
        address blogOwner;
        string blogTitle;
        string subTitle;
        string authorName;
        string blogContent;
        uint256 timestamp;
        string coverImage;
    }

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    Blog[] blogs;

    function getAllblogs() public view returns (Blog[] memory) {
        return blogs;
    }

    function newBlog(
        uint256 blogId_,
        string memory blogTitle_,
        string memory subTitle_,
        string memory authorName_,
        string memory blogContent_,
        string memory coverImage_
    ) public payable {
        blogs.push(
            Blog(
                blogId_,
                payable(msg.sender),
                blogTitle_,
                subTitle_,
                authorName_,
                blogContent_,
                block.timestamp,
                coverImage_
            )
        );

        emit BlogAdded(
            blogId_,
            msg.sender,
            blogTitle_,
            subTitle_,
            authorName_,
            blogContent_,
            block.timestamp,
            coverImage_
        );
    }

    function tipToOwner(address payable blogOwner_) public payable {
        blogOwner_.transfer(msg.value);
    }
}
