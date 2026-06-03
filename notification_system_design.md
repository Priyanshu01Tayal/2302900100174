# Notification System Design

## Stage 1

### REST API Endpoints

#### GET /notifications

Response:

```json
[
  {
    "id": 1,
    "studentId": "2302900100174",
    "type": "Placement",
    "message": "Amazon Hiring",
    "isRead": false
  }
]
```

#### GET /notifications/:id

Response:

```json
{
  "id": 1,
  "type": "Placement",
  "message": "Amazon Hiring"
}
```

#### POST /notifications

Request:

```json
{
  "studentId": "2302900100174",
  "type": "Placement",
  "message": "Amazon Hiring"
}
```

Response:

```json
{
  "status": "success",
  "id": 1
}
```

#### PATCH /notifications/:id/read

Response:

```json
{
  "status": "updated"
}
```

#### DELETE /notifications/:id

Response:

```json
{
  "status": "deleted"
}
```

### Headers

```http
Authorization: Bearer <token>
Content-Type: application/json
```

### Real-Time Updates

WebSocket will be used to deliver notifications instantly.

---

## Stage 2

### Database Choice

PostgreSQL

### Reason

* ACID Compliance
* High Reliability
* Fast Query Processing
* Indexing Support
* Scalable Architecture

### Table: notifications

| Column    | Type      |
| --------- | --------- |
| id        | UUID      |
| studentId | VARCHAR   |
| type      | VARCHAR   |
| message   | TEXT      |
| isRead    | BOOLEAN   |
| createdAt | TIMESTAMP |

### Example SQL Query

```sql
SELECT *
FROM notifications
WHERE studentId='2302900100174'
ORDER BY createdAt DESC;
```

### Possible Problems

* Large data volume
* Slow queries
* Increased storage usage

### Solutions

* Indexing
* Partitioning
* Read Replicas
* Redis Caching

---

## Stage 3

### Indexing Strategy

Composite Index:

```sql
(studentId, isRead, createdAt)
```

---

## Stage 4

### Performance Optimization

## Stage 4
Performance:
- Redis Cache
- Pagination
- Read Replicas
- Lazy Loading

---


## Stage 5
Queue System:
- RabbitMQ
- Kafka

Purpose:

* Asynchronous Notification Delivery
* Event Processing
* High Throughput

---

## Stage 6
## Stage 6

### Priority Notification System

Priority is calculated using notification type and recency.

Weights:

* Placement = 3
* Result = 2
* Event = 1

### Algorithm

1. Fetch notifications from Notification API.
2. Assign weight based on notification type.
3. Sort notifications by:

   * Priority Weight (Descending)
   * Timestamp (Descending)
4. Select Top 10 notifications.

### Example

Placement notifications are displayed before Result notifications.

Result notifications are displayed before Event notifications.

### Handling New Notifications

The system fetches fresh notifications whenever the dashboard loads.

Priority list is recalculated after every fetch to ensure newly arrived notifications are included.

### Advantages

* Simple implementation
* Fast execution
* Real-time updates
* Easy scalability


### Priority Formula

Priority Score = Weight × Recency
