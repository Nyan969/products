SELECT date,
       docTypes.name as docType,
       docs.id,
       products.name,
       image,
       price,
       quantity,
       products.removed
FROM docs
         JOIN rows
              ON docs.id = rows.docId
         JOIN docTypes
              ON docs.typeId = docTypes.id
         JOIN products
              ON productId = products.id
WHERE docs.removed = false
  AND docTypes.removed = false
ORDER BY date;
