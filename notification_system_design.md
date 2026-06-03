# Notification System Design

## Stage 1
REST APIs:
- GET /notifications
- GET /notifications/:id
- POST /notifications
- PATCH /notifications/:id/read
- DELETE /notifications/:id

Real-time updates:
- WebSocket

## Stage 2
Database: PostgreSQL

Table: notifications

Columns:
- id
- studentId
- type
- message
- isRead
- createdAt

## Stage 3
Use indexing on:
(studentId, isRead, createdAt)

## Stage 4
Performance:
- Redis Cache
- Pagination
- Read Replicas
- Lazy Loading

## Stage 5
Queue System:
- RabbitMQ
- Kafka

## Stage 6
Priority:
Placement > Result > Event

Weights:
Placement = 3
Result = 2
Event = 1