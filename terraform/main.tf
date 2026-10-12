provider "aws" {
  region = "eu-west-1"
}

resource "aws_s3_bucket" "order_receipts" {
  bucket = "storefront-customer-receipts-bucket-prod"
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.order_receipts.id
  block_public_acls   = false
  block_public_policy = false
}
